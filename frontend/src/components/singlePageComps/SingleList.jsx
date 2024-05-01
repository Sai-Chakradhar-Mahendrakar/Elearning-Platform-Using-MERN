import React from "react";

import { FaCheck } from "react-icons/fa";

const SingleList = () => {
  const list = [
    "Build enterprise level Node applications and deploy to the cloud (AWS)",
    "Lead NodeJS projects by making good architecture decisions and helping others on your team",
    "Work with real life data and SpaceX API to build a NASA launch system, discover new planets that may contain life + other projects",
    "Build a MERN (MongoDb, Express, React, Node) fullstack app and deploy to production",
    "Become the top 10% Node Developer. Learn REALLY advanced topics!",
    "Master the latest ecosystem of a Backend NodeJS Developer from scratch",
    "Learn to build secure and performant, large scale applications like a senior backend developer",
    "Using NodeJS, build production grade apps including REST APIs and GraphQL APIs",
    "Authentication, File I/O, Databases (SQL, MongoDB), Express Framework, Sockets, plus many other important topics a backend developer should know",
    "Load balancing, Monitoring, CI/CD, and Zero Downtime Deployment",
    "Focus on security best practices throughout the course so you can be confident with your deployments",
  ];

  return (
    <div className="justify-center flex md:flex-none ">
      <div className=" border my-5 py-5 max-w-[598px]  text-black bg-white">
        <div>
          <h3 className="text-lg font-bold pb-4">What you'll learn</h3>
        </div>

        <div className="sm:grid-cols-2 grid  text-[10px] space-y-1.5 ">
          {list.map((item) => (
            <>
              <div className="flex">
                <FaCheck className="m-2 " />
                <p className=" max-w-[230px] ">{item}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleList;
