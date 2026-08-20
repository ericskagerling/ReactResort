import { createHotel } from "@/app/lib/hotelService";

async function handleCreateHotel(formData: FormData) {
  "use server";
  const name = formData.get("name") as string;
  const address = formData.get("address") as string;

  await createHotel(name, address);
}

export default async function CreateHotel() {
  return (
    <>
      <div className="flex flex-1 flex-col items-center">
        <h2 className="heading-two mb-10 text-center">Create Hotel</h2>

        <form
          action={handleCreateHotel}
          className="flex flex-col items-center gap-3"
        >
          <label htmlFor="name">Hotel name:</label>
          <input
            type="text"
            className="border m-1 rounded-md"
            id="name"
            name="name"
            required
          />

          <label htmlFor="address">Hotel address:</label>
          <input
            type="text"
            className="border m-1 rounded-md"
            id="address"
            name="address"
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
