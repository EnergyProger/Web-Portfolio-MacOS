import { socials } from "@config";

const ContactSocials = () => {
  return (
    <ul>
      {socials.map((social) => (
        <li key={social.id} style={{ backgroundColor: social.bg }}>
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            title={social.text}
          >
            <img src={social.icon} alt={social.text} className="size-5" />
            <p>{social.text}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContactSocials;
