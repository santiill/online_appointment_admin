import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Search,
  ConversationList,
  Conversation,
  Avatar,
  ConversationHeader,
  VoiceCallButton,
  VideoCallButton,
  TypingIndicator,
  MessageSeparator,
  Sidebar,
  EllipsisButton,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";

const Chats = () => {
  // Set initial message input value to an empty string
  const [messageInputValue, setMessageInputValue] = useState("");
  return (
    <div
      style={{
        height: "600px",
        position: "relative",
      }}
    >
      <MainContainer responsive>
        <Sidebar position="left" scrollable={false}>
          {/* <Search placeholder="Search..." /> */}
          <ConversationList>        
        <Conversation name="Lilly" lastSenderName="Lilly" info="Yes i can do it for you">
          {/* <Avatar src={"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F002%2F427%2Foriginal%2Fman-avatar-character-isolated-icon-free-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fman-avatar&tbnid=RrJy2x1mQ0drSM&vet=12ahUKEwjMrq782Jr4AhXml4sKHePcBsYQMygCegUIARDCAQ..i&docid=_oz7H4D9-W19AM&w=7974&h=7974&q=avatar%20icon&ved=2ahUKEwjMrq782Jr4AhXml4sKHePcBsYQMygCegUIARDCAQ"} name="Lilly" /> */}
        </Conversation>
        
        <Conversation name="Joe" lastSenderName="Joe" info="Yes i can do it for you">
          {/* <Avatar src={"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F002%2F427%2Foriginal%2Fman-avatar-character-isolated-icon-free-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fman-avatar&tbnid=RrJy2x1mQ0drSM&vet=12ahUKEwjMrq782Jr4AhXml4sKHePcBsYQMygCegUIARDCAQ..i&docid=_oz7H4D9-W19AM&w=7974&h=7974&q=avatar%20icon&ved=2ahUKEwjMrq782Jr4AhXml4sKHePcBsYQMygCegUIARDCAQ"} name="Joe" /> */}
        </Conversation>
        
        <Conversation name="Emily" lastSenderName="Emily" info="Yes i can do it for you">
          {/* <Avatar src={"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F002%2F427%2Foriginal%2Fman-avatar-character-isolated-icon-free-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fman-avatar&tbnid=RrJy2x1mQ0drSM&vet=12ahUKEwjMrq782Jr4AhXml4sKHePcBsYQMygCegUIARDCAQ..i&docid=_oz7H4D9-W19AM&w=7974&h=7974&q=avatar%20icon&ved=2ahUKEwjMrq782Jr4AhXml4sKHePcBsYQMygCegUIARDCAQ"} name="Emily" /> */}
        </Conversation>
        
        <Conversation name="Kai" lastSenderName="Kai" info="Yes i can do it for you">
          {/* <Avatar src={"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F002%2F427%2Foriginal%2Fman-avatar-character-isolated-icon-free-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fman-avatar&tbnid=RrJy2x1mQ0drSM&vet=12ahUKEwjMrq782Jr4AhXml4sKHePcBsYQMygCegUIARDCAQ..i&docid=_oz7H4D9-W19AM&w=7974&h=7974&q=avatar%20icon&ved=2ahUKEwjMrq782Jr4AhXml4sKHePcBsYQMygCegUIARDCAQ"} name="Kai" /> */}
        </Conversation>
                    
        <Conversation name="Akane" lastSenderName="Akane" info="Yes i can do it for you">
          {/* <Avatar src={"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F002%2F427%2Foriginal%2Fman-avatar-character-isolated-icon-free-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fman-avatar&tbnid=RrJy2x1mQ0drSM&vet=12ahUKEwjMrq782Jr4AhXml4sKHePcBsYQMygCegUIARDCAQ..i&docid=_oz7H4D9-W19AM&w=7974&h=7974&q=avatar%20icon&ved=2ahUKEwjMrq782Jr4AhXml4sKHePcBsYQMygCegUIARDCAQ"} name="Akane" /> */}
        </Conversation>
                            
        <Conversation name="Eliot" lastSenderName="Eliot" info="Yes i can do it for you">
          {/* <Avatar src={"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F002%2F427%2Foriginal%2Fman-avatar-character-isolated-icon-free-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fman-avatar&tbnid=RrJy2x1mQ0drSM&vet=12ahUKEwjMrq782Jr4AhXml4sKHePcBsYQMygCegUIARDCAQ..i&docid=_oz7H4D9-W19AM&w=7974&h=7974&q=avatar%20icon&ved=2ahUKEwjMrq782Jr4AhXml4sKHePcBsYQMygCegUIARDCAQ"} name="Eliot" /> */}
        </Conversation>
                                            
        <Conversation name="Zoe" lastSenderName="Zoe" info="Yes i can do it for you">
          {/* <Avatar src={"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F002%2F427%2Foriginal%2Fman-avatar-character-isolated-icon-free-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fman-avatar&tbnid=RrJy2x1mQ0drSM&vet=12ahUKEwjMrq782Jr4AhXml4sKHePcBsYQMygCegUIARDCAQ..i&docid=_oz7H4D9-W19AM&w=7974&h=7974&q=avatar%20icon&ved=2ahUKEwjMrq782Jr4AhXml4sKHePcBsYQMygCegUIARDCAQ"} name="Zoe" /> */}
        </Conversation>
                                                        
        <Conversation name="Patrik" lastSenderName="Patrik" info="Yes i can do it for you">
          {/* <Avatar src={"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F002%2F427%2Foriginal%2Fman-avatar-character-isolated-icon-free-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fman-avatar&tbnid=RrJy2x1mQ0drSM&vet=12ahUKEwjMrq782Jr4AhXml4sKHePcBsYQMygCegUIARDCAQ..i&docid=_oz7H4D9-W19AM&w=7974&h=7974&q=avatar%20icon&ved=2ahUKEwjMrq782Jr4AhXml4sKHePcBsYQMygCegUIARDCAQ"} name="Patrik" /> */}
        </Conversation>
        
      </ConversationList>
        </Sidebar>

        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Back />
           {/*  <Avatar name="Zoe" /> */}
            <ConversationHeader.Content
              userName="Zoe"
              info="Active 10 mins ago"
            />
            <ConversationHeader.Actions>
              {/* <VoiceCallButton />
              <VideoCallButton />
              <EllipsisButton orientation="vertical" /> */}
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList
          //     typingIndicator={<TypingIndicator content="Zoe is typing" />
          // }
          >
            <MessageSeparator content="Saturday, 30 November 2019" />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Zoe",
                direction: "incoming",
                position: "single",
              }}
            >
              {/* <Avatar name="Zoe" />  */}
            </Message>
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Patrik",
                direction: "outgoing",
                position: "single",
              }}
              /* avatarSpacer */
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Zoe",
                direction: "incoming",
                position: "first",
              }}
              /* avatarSpacer */
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Zoe",
                direction: "incoming",
                position: "normal",
              }}
              /* avatarSpacer */
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Zoe",
                direction: "incoming",
                position: "normal",
              }}
              /* avatarSpacer */
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Zoe",
                direction: "incoming",
                position: "last",
              }}
            >
              {/* <Avatar  name="Zoe" /> */}
            </Message>
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Patrik",
                direction: "outgoing",
                position: "first",
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Patrik",
                direction: "outgoing",
                position: "normal",
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Patrik",
                direction: "outgoing",
                position: "normal",
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Patrik",
                direction: "outgoing",
                position: "last",
              }}
            />

            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Zoe",
                direction: "incoming",
                position: "first",
              }}
              /* avatarSpacer */
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Zoe",
                direction: "incoming",
                position: "last",
              }}
            >
            {/*   <Avatar name="Zoe" /> */}
            </Message>
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            value={messageInputValue}
            onChange={(val) => setMessageInputValue(val)}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default Chats;
