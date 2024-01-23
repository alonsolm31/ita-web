import CeremoniesForm from "./CeremoniesForm";

interface EmailProps {
  id: string;
  __component: string;
  title: string;
  description: string;
  emailPlaceholder: string;
  submitButton: {
    text: string;
  };
}

export default function Email({ data }: { data: EmailProps }) {
  return (
    <section>
      <CeremoniesForm
        placeholder={data.emailPlaceholder}
        text={data.submitButton.text}
      />
    </section>
  );
}
