import useArtisanContext from "../../hooks/useArtisanContext";
import useChatContext from "../../hooks/useChatContext";
import { SubHeader } from "../general/Header";

const ContactsList = () => {
  const { contactList } = useArtisanContext();
  const { handleSelectContact } = useChatContext();

  const formatLastSeen = (lastSeen) => {
    const date = new Date(lastSeen);
    return date.toLocaleString("en-GB", {
      weekday: "short",
      //year: "numeric",
      //month: "short",
      //day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="p-3  ">
      <div className=" pb-5">
        <SubHeader title={"Chat"} />
      </div>
      <ul>
        {contactList.map((contact) => {
          const receiver = contact?.receiver;
          const lastMessage = contact?.last_message?.text;
          const service = contact?.receiver?.services[0];
          const isOnline = receiver?.user?.online_status?.is_online;
          const lastSeen = receiver?.user?.online_status?.last_seen;
          const formattedLastSeen = formatLastSeen(lastSeen);

          return (
            <li
              key={contact.id}
              className="w-full border-b py-5 cursor-pointer hover:bg-gray-100 flex justify-between items-center gap-3"
              onClick={() => handleSelectContact(contact.id)}
            >
              <div className="flex items-center gap-3">
                <img
                  className="w-10 h-10 rounded-full"
                  src={service.image}
                  alt=""
                />
                <div className=" gap-3">
                  <p className=" flex flex-col">
                    <span className="flex items-center  gap-2">
                      <div className="text-lg md:text-sm">
                        {receiver?.business_name}
                      </div>
                      <div
                        className={`h-2 w-2 rounded-full bg-green-600  ${
                          isOnline ? "block" : "hidden"
                        }`}
                        title={isOnline ? "Online" : "Offline"}
                      ></div>
                    </span>

                    <span className="opacity-50 text-xs ">{lastMessage}</span>
                  </p>
                </div>
              </div>

              <span
                className={`${
                  isOnline ? `hidden` : `block`
                } text-xs text-gray-500`}
                title="Last Seen"
              >
                {formattedLastSeen}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactsList;
