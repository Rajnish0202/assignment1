import React from 'react';

const Card = React.forwardRef(({ profile, isLoading }, ref) => {
  const profileBody = (
    <>
      {isLoading ? (
        <img
          className='loadingImage'
          src='https://avatars.dicebear.com/api/micah/:seed.svg?size=150'
          alt='https://avatars.dicebear.com/api/micah/:seed.svg?size=150'
        />
      ) : (
        <>
          <div className='imageContainer'>
            <img
              className='image'
              src={'https://avatars.dicebear.com/api/adventurer/:seed.svg?size=150'}
              alt='https://avatars.dicebear.com/api/adventurer/:seed.svg'
            />
          </div>
          <div className='details'>
            <div className='rows'>
              <p className='title'>Name: </p>
              <p className='detail'>{profile.name}</p>
            </div>
            <div className='rows'>
              <p className='title'>Email: </p>
              <p className='detail'>{profile.email.toLowerCase()}</p>
            </div>
            <div className='rows'>
              <p className='title'>Address: </p>
              <p className='detail'>
                {profile.address.street}, <br /> {profile.address.suite},<br /> {profile.address.city}, <br />
                {profile.address.zipcode}
              </p>
            </div>
            <div className='rows'>
              <p className='title'>Phone: </p>
              <p className='detail'>{profile.phone}</p>
            </div>
            <div className='rows'>
              <p className='title'>Company: </p>
              <p className='detail'>{profile.company.name}</p>
            </div>
            <div className='rows'>
              <p className='title'>Website: </p>
              <p className='detail'>
                <a href='{profile.website}'>{profile.website}</a>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );

  const content = ref ? (
    <div className='card' ref={ref}>
      {profileBody}
    </div>
  ) : (
    <div className='card'>{profileBody}</div>
  );

  return content;
});

export default Card;
