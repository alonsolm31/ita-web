import FormSubmit from "./FormSubmit";

interface DateTimeProps {
  id: string;
  __component: string;
  title: string;
  dateTimePlaceholder: string;
  submitButton: {
    text: string;
  };
}

export default function DateTime({ data }: { data: DateTimeProps }) {
  return (
    <section className="py-6 dark:bg-black dark:text-gray-50">
      <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
        <div className="flex flex-col space-y-4 text-center lg:text-left">
          <p className="text-lg">{data.title}</p>
        </div>
        <FormSubmit
          placeholder={data.dateTimePlaceholder}
          text={data.submitButton.text}
        />
      </div>
    </section>
  );
}
