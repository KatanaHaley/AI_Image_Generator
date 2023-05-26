import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: '',
    });

    const [generatingImg, setGeneratingImg] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSurpriseMe = () => {
        const randomPrompt = getRandomPrompt(form.prompt);
        setForm({ ...form, prompt: randomPrompt });
    };

    const generateImage = async () => {
        if (form.prompt) {
            try {
                setGeneratingImg(true);
                const response = await fetch('https://image-generator-with-ai.onrender.com/api/v1/dalle', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        prompt: form.prompt,
                    }),
                });

                const data = await response.json();
                setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
            } catch (err) {
                alert(err);
            } finally {
                setGeneratingImg(false);
            }
        } else {
            alert('Please provide proper prompt');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.prompt && form.photo) {
            setLoading(true);
            try {
                const response = await fetch('https://image-generator-with-ai.onrender.com/api/v1/post', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ ...form }),
                });

                await response.json();
                alert('Success');
                navigate('/');
            } catch (err) {
                alert(err);
            } finally {
                setLoading(false);
            }
        } else {
            alert('Please generate an image with proper details');
        }
    };

    return (
        <>


            <section className="">

                <form className="ml-20 align-center" onSubmit={handleSubmit}>
                    <div className="place-content-around ">
                        <h1 className="font-extrabold text-[#222328] text-[45px] text-center text-white">AI Image Generator: Convert Text into Stunning Images</h1>
                        <p className="p-10 m-1 text-[#32CD32] text-[20px] text-center max-w-screen">Generate an imaginative image through DALL-E AI and share it with the community</p>
                    </div>

                    
                    <div className="flex flex-col gap-5 lg:ml-20 lg:mr-20 align-center flex items-center">
                        <div className="mr-20 ml-20 w-full align-center">

                            <FormField
                                labelName=""
                                type="text"
                                name="name"
                                placeholder="Your Username"
                                value={form.name}
                                handleChange={handleChange}
                            />
                        </div>

                        <form className="mr-20 ml-20 w-full align-center">
                            <div className="flex items-center py-2 justify-between">
                                <FormField
                                    labelName="Prompt"
                                    type="text"
                                    name="prompt"
                                    placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
                                    value={form.prompt}
                                    handleChange={handleChange}
                                    isSurpriseMe
                                    handleSurpriseMe={handleSurpriseMe}
                                />

                                <div className="mt-10">    
                                <button
                                    type="button"
                                    onClick={generateImage}
                                    className="relative mt-10 text-black bg-[#32CD32] font-medium rounded-md text-sm lg:w-full sm:w-auto px-5 py-3 text-center flex-wrap"
                                >
                                    {generatingImg ? 'Generating...' : 'Generate'}
                                </button>
                                </div>
                            </div>
                        </form>


                        <div className="lg:h-60% lg:w-60%">
                            <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 lg:w-full p-3 lg:h-full flex justify-center items-center">
                                {form.photo ? (
                                    <div>
                                        <img
                                            src={form.photo}
                                            alt={form.prompt}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                ) : (
                                    <img
                                        src={preview}
                                        alt="preview"
                                        className="w-9/12 h-9/12 object-contain opacity-40"
                                    />
                                )}

                                {generatingImg && (
                                    <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                                        <Loader />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>



                    <div className="mt-10">
                        <p className="mt-2 text-[#000000] text-[14px]">** Once you have created the image you want, you can share it with others in the community **</p>
                        <button
                            type="submit"
                            className="mt-3 text-white bg-[#222222] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            {loading ? 'Sharing...' : 'Share with the Community'}
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default CreatePost;