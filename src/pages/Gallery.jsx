export default function Gallery() {
  const galleryItems = [
    {
      title: 'Web Development',
      description: 'Modern web solutions with cutting-edge technologies',
      imageUrl: 'https://source.unsplash.com/800x600/?coding'
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic online presence and brand growth',
      imageUrl: 'https://source.unsplash.com/800x600/?marketing'
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user experiences',
      imageUrl: 'https://source.unsplash.com/800x600/?design'
    },
    {
      title: 'Mobile Solutions',
      description: 'Cross-platform mobile development',
      imageUrl: 'https://source.unsplash.com/800x600/?mobile'
    },
    {
      title: 'Cloud Computing',
      description: 'Scalable cloud infrastructure and services',
      imageUrl: 'https://source.unsplash.com/800x600/?cloud'
    },
    {
      title: 'Data Analytics',
      description: 'Insightful data analysis and visualization',
      imageUrl: 'https://source.unsplash.com/800x600/?data'
    }
  ];

  return (
    <div className="container">
      <h1 className="page-title">Our Services</h1>
      <div className="gallery">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.imageUrl} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
