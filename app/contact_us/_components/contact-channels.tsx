import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import ContactChannel from "./contact-channel";

/**
 * Left column of the Contact page: location, LinkedIn, email, and
 * Instagram channels.
 *
 * @returns The contact channels list.
 */
export default function ContactChannels() {
  const LOCATION_LABEL = "ETLC, 9120 116 St NW, Edmonton, AB T6G 2V4";
  const LOCATION_URL = "https://maps.app.goo.gl/hhNhurKQsc7pEQY66";
  const LINKEDIN_URL = "https://www.linkedin.com/company/alberta-heart";
  const EMAIL = "abheart@ualberta.ca";
  const INSTAGRAM_URL = "https://www.instagram.com/alberta.heart";

  return (
    <div className="space-y-8">
      <ContactChannel
        icon={<MapPin className="h-5 w-5 text-light-red" />}
        label="Location"
        href={LOCATION_URL}
        external
      >
        {LOCATION_LABEL}
      </ContactChannel>

      <ContactChannel icon={<Mail className="h-5 w-5 text-light-red" />} label="Email" href={`mailto:${EMAIL}`}>
        {EMAIL}
      </ContactChannel>

      <ContactChannel
        icon={<Image src="/brand/instagram.svg" alt="" width={20} height={20} />}
        label="Instagram"
        href={INSTAGRAM_URL}
        external
      >
        @alberta.heart
      </ContactChannel>

      <ContactChannel
        icon={<Image src="/brand/linkedin.svg" alt="" width={20} height={20} />}
        label="LinkedIn"
        href={LINKEDIN_URL}
        external
      >
        Alberta Heart
      </ContactChannel>
    </div>
  );
}
