export let dataGlobal;

// FUNCTION TO FETCH DATA FROM API CALL
async function fetchData() {
  try {
    const response = await fetch('https://majazocom.github.io/Data/solaris.json');
    if (!response.ok) {
      throw new Error(
        `Fetch request failed with status ${response.status}: ${response.statusText}`
      );
    }
    const data = await response.json();
    dataGlobal = data; // SETTING RETURNED DATA TO GLOBAL VARIABLE
    return data;
  } catch (error) {
    console.error(`An error occurred while fetching the data: ${error}`);
    alert(`An error occurred while fetching the data: (🛑${error})`);
  }
}
fetchData();
