const dataService = {
  getPosts() {
    try {
      return new Promise(async (resolve, reject) => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        if (data && data?.length > 0) {
          resolve({ success: true, source: "Posts", data });
        } else {
          reject({ success: false });
        }
      });
    } catch (error) {
      console.error(error);
    }
  },
  getComments() {
    try {
      return new Promise(async (resolve, reject) => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const data = await response.json();
        setTimeout(() => {
          if (data && data?.length > 0) {
            resolve({ success: true, source: "Comments", data });
          } else {
            reject({ success: false });
          }
        }, 5000);
      });
    } catch (error) {
      console.error(error);
    }
  },
  getPhotos() {
    try {
      return new Promise(async (resolve, reject) => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await response.json();
        if (data && data?.length > 0) {
          resolve({ success: true, source: "Photos", data });
        } else {
          reject({ success: false });
        }
      });
    } catch (error) {
      console.error(error);
    }
  },
};

const { getPosts, getComments, getPhotos } = dataService;

const { data: posts } = await getPosts();
console.log(`Posts : ${posts?.length}`);

const { data: comments } = await getComments();
console.log(`Comments : ${comments?.length}`);

const { data: photos } = await getPhotos();
console.log(`Photos : ${photos?.length}`);

await Promise.allSettled([getPosts(), getComments(), getPhotos()]).then(
  handler
);

function handler(results) {
  results.forEach(({ status, value: { success, source, data } }) => {
    if (status === "fulfilled") {
      success && console.log(`${source} Length : ${data.length}`);
      console.log("*".repeat(20));
    }
  });
}

export default {};
