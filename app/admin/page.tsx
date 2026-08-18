export default async function admin() {
  return (
    <>
      <div className="flex-1 text-center">
        <h2 className="heading-two mb-10 text-center">Admin Page</h2>

        <a href="/admin/create" className="nav-button button-text m-2">
          Create hotel
        </a>

        <a href="/admin/update" className="nav-button button-text  m-2">
          Update hotel
        </a>

        <a href="/admin/delete" className="nav-button button-text  m-2">
          Delete hotel
        </a>
      </div>
    </>
  );
}
