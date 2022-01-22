import React from 'react';
import './image-card.component.css';

interface ImageCardProps {
  author: string;
  image: string;
  title: string;
  date: string;
  description: string;
}
export default function ImageCard({ author, title, date, image, description }: ImageCardProps) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{author}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{title}</h5>
          <div className="card-date">{date}</div>
        </div>
      </div>
      <img className="card-image" src={image} alt="Logo" />
      <div className="card-text">{description}</div>
    </div>
  );
}
