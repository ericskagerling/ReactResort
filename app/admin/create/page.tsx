async function createHotel(formData: FormData) {
  "use server";
  const name = formData.get("hotelName");
  const address = formData.get("hotelAddress");

  const response = await fetch("https://aspcode.net/api/db/HotelAPI/hotels", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": process.env.HOTEL_API_KEY!,
    },
    body: JSON.stringify({
      name,
      address,
    }),
  });
  const data = await response.json();

  console.log("Created hotel: " + data);
}

export default async function CreateHotel() {
  return (
    <>
      <div className="flex flex-1 flex-col items-center">
        <h2 className="heading-two mb-10 text-center">Create Hotel</h2>

        <form action={createHotel} className="flex flex-col items-center gap-3">
          <label htmlFor="hotelName">Hotel name:</label>
          <input
            type="text"
            className="border m-1 rounded-md"
            id="hotelName"
            name="hotelName"
            required
          />

          <label htmlFor="hotelAddress">Hotel address:</label>
          <input
            type="text"
            className="border m-1 rounded-md"
            id="hotelAddress"
            name="hotelAddress"
            required
          />

          <button type="submit" className="nav-button button-text mt-4 ">
            Create
          </button>
        </form>
      </div>
    </>
  );
}
