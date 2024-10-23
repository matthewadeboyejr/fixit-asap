import useArtisanContext from "../../hooks/useArtisanContext";
import useChatContext from "../../hooks/useChatContext";
import { SubHeader } from "../general/Header";
import { IoIosSearch } from "react-icons/io";
import ChatListSkeleton from "../skeleton/ChatListSkeleton";
import { useEffect } from "react";
import UseFormatTime from "../../hooks/UseFormatTime";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ContactsList = () => {
  const { contactList, loadingContactList, handleContactList } =
    useArtisanContext();
  const { handleSelectContact } = useChatContext();

  console.log(contactList);

  useEffect(() => {
    handleContactList();
  }, [handleContactList]);

  return (
    <div className="p-3 bg-secondary/5 h-full ">
      <div className=" pb-5">
        <SubHeader title={"Messages"} />
      </div>

      <form className="mb-5 px-2 py-1 bg-white  flex rounded-lg items-center mx-2   ">
        <span className="   text-lg ">
          <IoIosSearch />
        </span>
        <input
          type="text"
          lastSeen
          className="w-full py-3 px-2 outline-none text-xs  bg-transparent"
          placeholder="Search message"
        />
      </form>

      <ul className="space-y-3 m-2">
        {loadingContactList && <ChatListSkeleton cards={3} />}
        {contactList?.map((contact) => {
          const receiver = contact?.receiver;
          const lastMessage = contact?.last_message?.text;
          const service = contact?.receiver?.services[0];
          const isOnline = receiver?.user?.online_status?.is_online;
          const lastSeen = receiver?.user?.online_status?.last_seen;
          const formattedLastSeen = UseFormatTime(lastSeen);

          return (
            <li
              key={contact.id}
              className="w-full  border-b px-4 py-5 cursor-pointer bg-white rounded-lg  hover:shadow-sm flex justify-between items-center gap-3"
              onClick={() => handleSelectContact(contact.id)}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <LazyLoadImage
                    className="w-10 h-10 rounded-full"
                    src={service.image}
                    alt={receiver?.business_name || "Service Image"}
                  />
                  <div
                    className={`h-2.5 w-2.5 rounded-full border-2 border-white absolute bottom-1 right-0  ${
                      isOnline ? "bg-green-600 " : "bg-gray-300"
                    }`}
                    title={isOnline ? "Online" : "Offline"}
                  ></div>
                </div>

                <div className=" gap-3">
                  <p className=" flex flex-col">
                    <span className="flex items-center  gap-2">
                      <div className="text-sm font-medium">
                        {receiver?.business_name}
                      </div>
                    </span>

                    <span className="opacity-70 text-xs ">{lastMessage}</span>
                  </p>
                </div>
              </div>

              {!isOnline && (
                <span className="text-xs opacity-50" title="Last Seen">
                  {formattedLastSeen}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactsList;
