'use client'

import { ReactTyped } from "react-typed";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

const TextAnimation = () => {
  return (
    <div className="bg-pink-100 min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="flex justify-center items-center mb-4">
        <div className="bg-white p-2 rounded-full shadow-md">
          👋
        </div>
        <a href="#" className="ml-2 text-blue-600 underline">
          We're hiring self-motivated people to join us.
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-4">
        Customize with <span className="text-purple-600">Becca</span> new features for your <span className="text-purple-600">app&gt;/|</span>
      </h1>
      <div className="flex justify-center items-center space-x-4 mt-8">
        <div className="text-center">
          <p className="text-gray-600">Trusted by teams at</p>
          <div className="flex justify-center space-x-4 mt-2">
            <img src="/mihoku-logo.png" alt="Mihoku" className="h-8" />
            <img src="/headbook-logo.png" alt="Headbook" className="h-8" />
            <img src="/diego-logo.png" alt="Diego" className="h-8" />
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="bg-white shadow-lg p-8 rounded-lg">
          <img src="/computer.png" alt="Computer" className="w-48" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default TextAnimation;