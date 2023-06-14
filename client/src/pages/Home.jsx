import React, { useEffect, useState } from 'react';

import { Card, FormField, Loader } from '../components';

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return (
      data.map((post) => <Card key={post._id} {...post} />)
    );
  }

  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://image-generator-with-ai.onrender.com/api/v1/post', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));
        setSearchedResults(searchResult);
      }, 500),
    );
  };

  return (
    <>
      <div className="ml-20 mb-10">
        <div className="place-content-around ">
          <h1 className="font-extrabold text-[#222328] text-[45px] text-center text-white">AI Image Generator: Convert Text into Stunning Images</h1>
          <p className="p-10 m-1 text-[#32CD32] text-[20px] text-center max-w-screen">Generate an imaginative image through DALL-E AI and share it with the community</p>
        </div>

        <h1 className="m-1 text-white text-[25px] text-center font-light max-w-screen">The Community Showcase</h1>
        <p className="mt-8 text-[#666e75] text-[14px]">Browse through a collection of imaginative and visually stunning images generated by the community with DALL-E AI</p>
        <div className="mb-20 mt-5 w-full">
          <FormField
            //   labelName="Search posts"
            type="text"
            name="text"
            placeholder="Search images"
            value={searchText}
            handleChange={handleSearchChange}
          />
        </div>
        <section className="">




          <div className="mt-10">
            {loading ? (
              <div className="flex justify-center items-center">
                <Loader />
              </div>
            ) : (
              <>
                {searchText && (
                  <h2 className="font-medium text-[#32CD32] text-xl mb-3">
                    Showing Resuls for <span className="text-[#222328]">{searchText}</span>:
                  </h2>
                )}
                <div className="py-10 grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 grid-cols-1 gap-3 ml-10">
                  {searchText ? (
                    <RenderCards
                      data={searchedResults}
                      title="No Search Results Found"
                    />
                  ) : (
                    <RenderCards
                      data={allPosts}
                      title="No Posts Yet"
                    />
                  )}
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;