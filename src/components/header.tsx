import React, { memo, useRef, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { videoAtom } from "../atoms/video.atom";
import Youtube from "../services/videoService";

interface IHeaderProps {
  youtube: Youtube;
}

const Header: React.FC<IHeaderProps> = memo(({ youtube }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState<string>("");
  const setVideos = useSetRecoilState(videoAtom);

  useQuery(["search_videos"], () => youtube.searchVideos(query), {
    onError: (error) => console.log(error),
    onSuccess: (data) => setVideos(data),
    enabled: !!query,
  });

  const handleSearch = () => {
    setQuery(inputRef.current?.value ?? "");
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="bg-black text-white w-full flex items-center p-2">
      <Link to="/" className="flex items-center mr-6">
        <img src="/images/logo.png" alt="Youtube" className="h-10" />
        <h1 className="text-xl font-bold ml-2">Youtube</h1>
      </Link>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        className="flex-grow px-2 py-1 outline-none text-black"
        onKeyPress={onKeyPress}
      />
      <button type="submit" className="bg-gray-400 p-1" onClick={onClick}>
        <img src="/images/search.png" alt="Search" className="h-6" />
      </button>
    </header>
  );
});

export default Header;
