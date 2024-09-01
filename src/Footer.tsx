function Footer() {
  const day = String(new Date().getDay() + 1).padStart(2, "0");
  const month = String(new Date().getMonth() + 1).padStart(2, "0");
  const year = String(new Date().getFullYear());

  return (
    <footer>
      <hr></hr>
      <p>
        {day} {month} {year}
      </p>
    </footer>
  );
}

export default Footer;
