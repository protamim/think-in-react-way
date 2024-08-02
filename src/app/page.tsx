import Link from "next/link";

const HomePage = () => {
  return (
    <div className="m-10 flex items-center justify-center flex-col gap-y-8">
      <h4 className="text-center text-2xl font-bold text-black">Created some projects following REACT documentation</h4>

      {/* links */}
      <ul>
        <li className="list-decimal">
          <Link href='/think-in-react-way' className="transition-all ease-in-out duration-300 hover:text-purple-500">Think in a React Way</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;