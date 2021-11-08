/* Select Category from URL Params */

/* Wait 100ms to execute - TODO: Update to Wait on Actual Element */
setTimeout(function () {
    /* Get Parameter String */
    const queryParamsString = window.location.search.substr(1);

    /* Reduce Parameters to an K,V store Array */
    const queryParams = queryParamsString.split('&').reduce(function (accumulator, singleQueryParam) {
        const [key, value] = singleQueryParam.split('=');
        accumulator[key] = value;
        return accumulator;
    }, {});

    /* Check for Existence of category param and click on it's value */
    if (queryParams.hasOwnProperty('category')) {
        /* Click Corresponding Category with category ID */
        try {
            document.getElementById(queryParams.category).click();
        }
        catch (error) {
            console.log(`No Category Exists Called ${queryParams.category}`)
        }

        console.log(queryParams.category)
    }
}, 100);