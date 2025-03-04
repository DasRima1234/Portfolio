export default function Button({ text, onClick }) {
    return (
      <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700" onClick={onClick}>
        {text}
      </button>
    );
  }
  