const keysToGet: string[] = ['login', 'html_url', 'avatar_url', 'bio'];
  
export const getUser = async (username: string) => {
    try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);

        const userData  = await userResponse.json();

        if(userResponse.status === 404) {
            return {
                data: null,
                status: userResponse.status
            };
        }

        const userFilterData = keysToGet.reduce((result: any, key: string) => {
            if (userData.hasOwnProperty(key)) {
              result[key] = userData[key];
            }
            return result;
        }, {});
        
        return {
            data: userFilterData,
            status: userResponse.status
        };
        
    } catch(error) {
        console.log(error);
    }
}