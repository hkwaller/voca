import { MdLocalMovies as icon } from "react-icons/md";

export default {
  name: "word",
  title: "Word",
  type: "document",
  icon,
  fields: [
    {
      name: "word",
      title: "Word",
      type: "string",
    },
    {
      name: "date",
      title: "Word learnt",
      type: "datetime",
    },
  ],
  preview: {
    select: {
      title: "word",
      date: "date",
    },
    prepare(selection) {
      return {
        title: selection.title,
        date: selection.date,
      };
    },
  },
};
