// import ChatNavBar from "../components/ChatNavBar";
import { Outlet, useLocation } from "react-router-dom";
import ChatUserContainer from "../page/chat/ChatUserContainer";
import { useEffect } from "react";
import { socket } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../Rtk/slice/userSlice";

const Chat = () => {
  const user = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on();
    socket.emit("Enter-user", { userId: user?._id });
    socket.on("isActive", (data) => {
      dispatch(setActive(data));
    });

    return () => {
      socket.off("message");
    };
  }, [user?._id, dispatch]);

  return (
    <div className="h-full">
      <div className="grid  gap-4 chat-grid h-full p-2 relative ">
        <ChatUserContainer
          className={` md:static  duration-150  rounded-3xl bg-white/40 backdrop-blur-3xl ${
            pathname !== "/" && "hidden md:block "
          } `}
        />
        <div
          className={`relative rounded-3xl bg-white/40 overflow-hidden h-full backdrop-blur-3xl  ${
            pathname === "/" && "hidden md:block"
          } `}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Chat;
