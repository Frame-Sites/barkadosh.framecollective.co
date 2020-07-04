const getCDNUrl = (key, type) => {
  if (type !== 'resume') {
    const imageRequest = JSON.stringify({
      bucket: 'cf-simple-s3-origin-cloudfrontfors3-273116933489',
      key
      // edits: {
      //   resize: {
      //     width: 500,
      //   }
      // }
    });

    // TODO - Use for image CDN URL.
    // const landingRequest = JSON.stringify({
    //   bucket: 'cf-simple-s3-origin-cloudfrontfors3-273116933489',
    //   key: 'landing-min.png'
    // });
    // console.log('Landing PNG', `https://d1kk667yopfgms.cloudfront.net/${btoa(landingRequest)}`);

    return `https://d1kk667yopfgms.cloudfront.net/${btoa(imageRequest)}`
  }
  return `https://pbmgmt-resumes.s3.amazonaws.com/${key}`
}

export default getCDNUrl;
