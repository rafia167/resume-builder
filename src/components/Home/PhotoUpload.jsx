import React from 'react';
import { Upload, X } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

const PhotoUpload = () => {
  const { photo, setPhoto, t } = useResume();

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setPhoto(null);
  };

  return (
    <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-5 md:p-6">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
        {t.uploadPhoto || 'Upload Photo'}
      </h3>
      
      {photo ? (
        <div className="relative">
          <img 
            src={photo} 
            alt="Profile" 
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover mx-auto border-4 border-blue-500"
          />
          <button
            onClick={removePhoto}
            className="absolute top-0 right-1/2 translate-x-16 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
          >
            <X size={16} />
          </button>
          <label className="block mt-4">
            <span className="sr-only">Change photo</span>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100 cursor-pointer"
            />
          </label>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center w-full h-28 sm:h-32 md:h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-10 h-10 mb-3 text-gray-400" />
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="hidden"
          />
        </label>
      )}
    </div>
  );
};

export default PhotoUpload;
