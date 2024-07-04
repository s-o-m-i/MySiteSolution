// import moment from 'moment';

/**
 * @param  {string} str capitalize first letter of the given paramter
 */

export const capitalizeFirstLetter = (str: string) => {
  if (!str) return '';
  return str[0].toUpperCase() + str.slice(1);
};

/**
 * @param  {string} email value of email
 */
// helper function which will validate email address
export const validateEmail = (email: string) => {
  // eslint-disable-next-line no-useless-escape
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

/**
 * @param  {string} value value of anyfield
 */
// helper function which will validate if string is empty or not
export const isEmpty = (str: string) => {
  return !str || str?.trim()?.length === 0;
};

export const matchPassword = (password: string, confirmPassword: string) => {
  return password === confirmPassword;
}


export const truncateString = (str: string, num: number) => {
  if (str?.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
};

// helper function which will return random 4 digits string
export const generateRandomKey = () => Math.random().toString(36).slice(2, 6);

// helper function which will return true if device is mobile
export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  if (
    window?.innerWidth > 768 &&
    !window.navigator.userAgent.includes('Mobile')
  ) {
    return false;
  }
  return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    window.navigator.userAgent
  );
};

// helper function which will auto scroll to top of the page
export const scrollToTop = () => {
  if (typeof window !== `undefined`) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
};

// helper function which will return divide array into chunks
export const chunkArray = (myArray: any[], chunk_size: number) => {
  try {
    let results = [];
    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }
    return results;
  } catch (error) {
    return [];
  }
};

// helper function which will return params chunks
export const getParamsChunks = (chunks: any) => {
  try {
    const params: any = {};
    chunks.forEach((item: any) => {
      params[decodeURI(item[0])] = decodeURI(item[1]);
    });
    return params;
  } catch (error) {
    return {};
  }
};

// helper function which will return formated time (e.g: 1w, 2d, 3h, 4m)
// Example usage:
// const timestamp = 1672900434; // Replace this with your actual timestamp
// const formattedTime = formatPreviousMoment(timestamp);
// console.log(formattedTime); // Output: "1w" (for example, if the comment was made about a week ago)


// helper function which will return formated time (e.g: 1w, 2d, 3h, 4m)


// helper function which will check if string is url
export const isUrl = (str: string) => {
  try {
    new URL(str);
    return true;
  } catch (error) {
    return false;
  }
};

// THIS WILL CONVERT WHOLE FILE INTO BLOB
export const convertFileIntoBlob = async (file: any) => {
  // let response = await fetch(file);
  // let blob = await response.blob();
  // return blob || null;
 return file.slice(0, file?.size, file?.type)
};

