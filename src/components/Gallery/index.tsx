import Button from "components/Button";
import { useState } from "react";

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const firstRow = (
    <div className="grid gap-4">
      <div className="relative">
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
          alt=""
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
          <Button
            buttonText="View Project"
            onClick={() => console.log("View Project")}
          />
        </div>
      </div>
      <div className="relative">
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
          alt=""
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
          <Button
            buttonText="View Project"
            onClick={() => console.log("View Project")}
          />
        </div>
      </div>
      <div className="relative">
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
          alt=""
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
          <Button
            buttonText="View Project"
            onClick={() => console.log("View Project")}
          />
        </div>
      </div>
    </div>
  );

  const secondRow = (
    <div className="grid gap-4">
      <div className="relative">
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
          alt=""
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
          <Button
            buttonText="View Project"
            onClick={() => console.log("View Project")}
          />
        </div>
      </div>
      <div className="relative">
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
          alt=""
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
          <Button
            buttonText="View Project"
            onClick={() => console.log("View Project")}
          />
        </div>
      </div>
      <div className="relative">
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
          alt=""
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
          <Button
            buttonText="View Project"
            onClick={() => console.log("View Project")}
          />
        </div>
      </div>
    </div>
  );

  const additionalRow = (
    <>
      <div className="grid gap-4">
        <div className="relative">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
            <Button
              buttonText="View Project"
              onClick={() => console.log("View Project")}
            />
          </div>
        </div>
        <div className="relative">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
            <Button
              buttonText="View Project"
              onClick={() => console.log("View Project")}
            />
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="relative">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
            <Button
              buttonText="View Project"
              onClick={() => console.log("View Project")}
            />
          </div>
        </div>
        <div className="relative">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
            <Button
              buttonText="View Project"
              onClick={() => console.log("View Project")}
            />
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {firstRow}
        {secondRow}
        {showAll && additionalRow}
      </div>
      <div className="flex justify-center mt-8">
        <Button
          buttonText={showAll ? "View Less Projects" : "View All Projects"}
          onClick={() => setShowAll((prev) => !prev)}
          tailwindClasses="text-black rounded-full bg-extraPrimary"
        />
      </div>
      <hr className="my-8 border-t-2 border-white-300" />
    </div>
  );
};

export default Gallery;
