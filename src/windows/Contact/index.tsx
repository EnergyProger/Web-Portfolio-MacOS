import WindowWrapper from "@hoc/WindowWrapper";
import ContactContent from "./ContactContent";
import ContactHeader from "./ContactHeader";

const Contact = () => {
  return (
    <>
      <ContactHeader />
      <ContactContent />
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
