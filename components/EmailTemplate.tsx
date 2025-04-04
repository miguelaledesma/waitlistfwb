import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export const EmailTemplate = () => {
  const siteLogo = process.env.NEXT_PUBLIC_DOMAIN + "/speaker.svg";
  return (
    <Html>
      <Head />
      <Preview>{`You’re on the waitlist for ${process.env.NEXT_PUBLIC_SITE_NAME}`}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            style={img}
            src={process.env.NEXT_PUBLIC_LOGO || siteLogo}
            width="100"
            height="100"
            alt="Logo"
          />
          <Section>
            <Text
              style={text}
            >{`Big welcome and thanks for signing up for the waitlist! ${process.env.NEXT_PUBLIC_SITE_NAME}`}</Text>
            <Text style={text}>
              🚀 The mission is to create meaningful community and useful
              products to extend the longevity of the journey of jujitsu.
            </Text>
            <Text style={text}>
              🛳 All new products, resources and tools are carefully curated,
              with only a handful of the best being available and shipped to
              you.
            </Text>
            <Text style={text}>
              Keep up to date on our Instagram Page, @foreverwhitebeltofficial
              or look out for an email update!
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "45px",
};

const img = {
  paddingTop: "40px",
  margin: "0 auto",
};

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "400",
  color: "#404040",
  lineHeight: "26px",
  // padding: "0 40px",
};

const anchor = {
  textDecoration: "underline",
};
