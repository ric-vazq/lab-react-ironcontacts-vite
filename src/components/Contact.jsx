import Emoji from "./Emoji";

function Contact(props) {
  const { contact, clickToDelete } = props;
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className=" flex justify-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img
          src={contact.pictureUrl}
          alt="actorImage"
          className="w-32 h-48 rounded-md"
        />
      </th>
      <td>{contact.name}</td>
      <td>{contact.popularity}</td>
      {contact.wonOscar ? (
        <td>
          <Emoji symbol="🏆" />
        </td>
      ) : (
        <td>
          <Emoji symbol="❌" />
        </td>
      )}
      {contact.wonEmmy ? (
        <td>
          <Emoji symbol="🌟" />
        </td>
      ) : (
        <td>
          <Emoji symbol="❌" />
        </td>
      )}
      <td>
        <button
          onClick={() => clickToDelete(contact.id)}
          className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
        >
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Delete
          </span>
        </button>
      </td>
    </tr>
  );
}

export default Contact;
