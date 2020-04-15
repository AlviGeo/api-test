document
  .getElementById("inventoryBookForm")
  .addEventListener("submit", function () {
    event.preventDefault();
    const namaBuku = document.getElementById("namaBuku").value;
    const penerbitBuku = document.getElementById("penerbitBuku").value;
    const jumlahHalaman = document.getElementById("jumlahHalaman").value;
    const data = {
      namaBuku: namaBuku,
      penerbitBuku: penerbitBuku,
      jumlahHalaman: jumlahHalaman,
      jumlahBuku: jumlahBuku,
    };

    axios
      .post("http://localhost:3000/Buku", data)
      .then((res) => {
        console.log(res);
        window.alert("Buku berhasil di tambah");
      })
      .catch((err) => {
        console.log(err);
      });
  });
