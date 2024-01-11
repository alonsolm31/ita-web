import Link from "next/link";
import Email from "./Email";
import DateTime from "./DateTime";

interface Category {
  id: number;
  attributes: {
    name: string;
    slug: string;
    articles: {
      data: Array<{}>;
    };
  };
}

interface Article {
  id: number;
  attributes: {
    title: string;
    slug: string;
  };
}

function selectedFilter(current: string, selected: string) {
  return current === selected
    ? "px-3 py-1 rounded-lg hover:underline dark:bg-violet-700 dark:text-gray-100"
    : "px-3 py-1 rounded-lg hover:underline dark:bg-violet-400 dark:text-gray-900";
}

export default function ArticleSelect({
  categories,
  articles,
  params,
}: {
  categories: Category[];
  articles: Article[];
  params: {
    slug: string;
    category: string;
  };
}) {
  let emailData = {
    id: "1",
    __component: "dateTimecomponent",
    title: "Fecha y Hora",
    dateTimePlaceholder: "dateTimePlaceholder",
    submitButton: {
      text: "Agendar",
    },
  };
  return (
    <div className="p-4 rounded-lg dark:bg-gray-900 min-h-[365px] relative">
      <div>
        <DateTime data={emailData} />
      </div>
    </div>
  );
}
