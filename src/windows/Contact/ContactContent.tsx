import ContactSocials from "./ContactSocials";

const ContactContent = () => {
  return (
    <div className="p-5 space-y-5">
      <picture>
        <source type="image/webp" srcSet="/images/user-1.webp" />
        <img
          src="/images/user-1.png"
          alt="Eduard"
          loading="lazy"
          className="w-20 rounded-full"
        />
      </picture>
      <h3>Let's Connect</h3>
      <p>Got an idea? Let's chat</p>
      <p>
        <b>test@gmail.com</b>
      </p>
      <ContactSocials />
    </div>
  );
};

export default ContactContent;
