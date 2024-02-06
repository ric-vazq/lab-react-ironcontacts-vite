import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./components/Contact";

function App() {
  const [fiveContact, setContact] = useState(() => contacts.slice(0, 5));

  const randomInt = (arr) => Math.floor(Math.random() * arr.length);
  // will give a number from 0 till arr.length -1 (which is perfect for arrays)

  const getRandomContact = (arr, rndInt) => arr[rndInt];

  async function addRandomContact(arrMain, arrState) {
    if (arrMain.length === arrState.length) {
      console.log("No more contacts can be added");
      return;
    }

    let copyArray = [...fiveContact];
    let rndInt = await randomInt(arrMain);

    let rndContact = await getRandomContact(arrMain, rndInt);

    if (arrState.includes(rndContact)) {
      return addRandomContact(arrMain, arrState);
    } else {
      copyArray.push(rndContact);
      setContact(copyArray);
    }
  }

  async function sortAlphabetically(arrState) {
    let copyArray = [...arrState];
    let sortedArray = await copyArray.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    return setContact(sortedArray);
  }

  async function sortPopularity(arrState) {
    let copyArray = [...arrState];
    let sortedArray = await copyArray.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      } else if (b.popularity < a.popularity) {
        return -1;
      } else {
        return 0;
      }
    });
    return setContact(sortedArray);
  }

  async function deleteContact(contactId) {
    const filteredContacts = await fiveContact.filter((contact) => {
      return contact.id !== contactId;
    });
    return setContact(filteredContacts);
  }

  return (
    <div className="App">
      <h1 className="text-center font-semibold text-4xl text-base leading-9 my-10">
        LAB | React IronContacts
      </h1>
      <div className="flex justify-center">
        <button
          onClick={() => addRandomContact(contacts, fiveContact)}
          className="relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
        >
          <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
          <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
            <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
            <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
          </span>
          <span className="relative text-white">Add Random Contact</span>
        </button>
        <button
          onClick={() => sortAlphabetically(fiveContact)}
          className=" mx-5 relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
        >
          <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
          <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
            <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
            <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
          </span>
          <span className="relative text-white">Sort Alphabetically</span>
        </button>
        <button
          onClick={() => sortPopularity(fiveContact)}
          className="relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
        >
          <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
          <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
            <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
            <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
          </span>
          <span className="relative text-white">Sort by Popularity</span>
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="mx-auto my-10 w-11/12 text-lg text-center rtl:text-right text-gray-500 dark:text-gray-400">
          <caption>Popular actors listed by name and popularity.</caption>
          <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark: text-gray-400">
            <tr>
              <th className="py-6 px-5" scope="col">
                Picture
              </th>
              <th className="py-6 px-5" scope="col">
                Name
              </th>
              <th className="py-6 px-5" scope="col">
                Popularity
              </th>
              <th className="py-6 px-5" scope="col">
                Won Oscar
              </th>
              <th className="py-6 px-5" scope="col">
                Won Emmy
              </th>
              <th className="py-6 px-5" scope="col">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {fiveContact.map((contact) => {
              return (
                <Contact
                  contact={contact}
                  key={contact.id}
                  clickToDelete={deleteContact}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
