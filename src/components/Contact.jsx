const Contact = () => {
  return (
    <>
      <div class="solutions" id="visit">
        <h3 class="title_sol">Visit Us</h3>
        <div class="addLocations">
          <div class="sol_text">
            <div class="location_tag">
              <i class="fa-solid fa-location-dot fa-lg"></i>
              <button class="sol_tag_txt locButton b1">
                (Decarie Square Mall, Opposite Winners) 6900 Boulevard Décarie
                K-2, Côte Saint-Luc, Quebec H3X 2T8
              </button>
            </div>
            <div class="location_tag">
              <i class="fa-solid fa-location-dot fa-lg"></i>
              <button class="sol_tag_txt locButton b2">
                (Plaza Cote-des-Neiges) 6700, k59, Chem. de la Côte-des-Neiges,
                Montréal, QC H3S 2A8
              </button>
            </div>
            <div class="location_tag">
              <i class="fa-solid fa-location-dot fa-lg"></i>
              <button class="sol_tag_txt locButton b3">
                (Sonic Gas) 836 Route de la Cite des Jeunes, Saint-Lazare, QC
                J7T 2B5
              </button>
            </div>
            <div class="location_tag">
              <i class="fa-solid fa-location-dot fa-lg"></i>
              <button class="sol_tag_txt locButton b4">
                (Depanneur-Vaudreuil)488 Av. Saint-Charles, Vaudreuil-Dorion, QC
                J7V 2N7
              </button>
            </div>
          </div>
          <div class="contact_det">
            <h3 class="title_sol">Call Us</h3>

            <div class="contact_tag">
              <i class="fa-solid fa-phone"></i>
              <p class="email_txt">+1 (514) 561-7775</p>
            </div>
            <h3 class="title_sol">Email Us</h3>

            <div class="contact_tag">
              <i class="fa-solid fa-at fa-sm"></i>
              <p class="email_txt">callezhelp@gmail.com</p>
            </div>
            <div class="contact_tag">
              <i class="fa-solid fa-at fa-sm"></i>
              <p class="email_txt">Callezfix@gmail.com</p>
            </div>
          </div>
          <div class="contact_det">
            <h3 class="title_sol">Email Us</h3>
            <div class="contact_tag">
              <i class="fa-solid fa-at fa-sm"></i>
              <p class="email_txt">Callezfix@gmail.com</p>
            </div>
            <div class="contact_tag">
              <i class="fa-solid fa-phone"></i>
              <p class="email_txt">callezhelp@gmail.com</p>
            </div>
          </div>{" "}
          <div class="map">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1kFlHf7U1BQuonWnbZAY3LGKWbQs4xZo&ehbc=2E312F&noprof=1"
              width="400"
              height="250"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
