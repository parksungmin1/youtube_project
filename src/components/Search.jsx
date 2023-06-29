import React, { useEffect } from "react";
import { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Search() {
  const { query } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => {
    setText(query || "");
  }, [query]);
  return (
    <header className="w-full flex p-4 text-2xl border-zinc-600 mb-4">
      <div>
        <Link to="/" className="flex items-centers">
          <FaYoutube className="text-4xl text-brand" />
          <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
        </Link>
      </div>
      <form className="w-full flex justify-center" onSubmit={onSubmit}>
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          value={text}
          onChange={onChange}
        />
        <button className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
