import DescCard from "./DescCard";
import { schedules } from "./data";
const Problems = () => {
  return (
    <>
      <div class="problems">
        <div class="banner_2">
          <button class="banner_btn2">Mobile Phone Repair</button>
          <button class="banner_btn2">Laptop Repair</button>
          <button class="banner_btn2">Tablet Repair</button>
        </div>
        <div class="probs_desc">
          <div class="img_banner3">
            <img
              class="banner_img3"
              src="./images/cute-cell-phone-ring-cartoon-vector-icon-illustration-technology-object-icon-concept-isolated-flat/8700_5_2_01 [Converted].png"
              alt=""
            />
          </div>
          <div class="desc">
            <div class="desc_row">
              <div class="desc_card">
                <h4 class="prob_title">
                  <i class="fa-solid fa-angle-down fa-xl"></i>Screen Replacement
                </h4>
                <p class="prob_desc">
                  At Ez Fix Mobile, we specialize in seamless screen replacement
                  services for a variety of mobile phone models. Whether your
                  screen is cracked, unresponsive, or displaying anomalies, our
                  screen replacement service ensures a vibrant and fully
                  functional display.
                </p>
              </div>
              {/* <DescCard card={schedules[0]} /> */}
              <div class="desc_card">
                <h4 class="prob_title">
                  <i class="fa-solid fa-angle-down fa-xl"></i>Back Panel
                  Replacement
                </h4>
                <p class="prob_desc">
                  A damaged back glass not only affects the appearance of your
                  mobile phone but also exposes it to potential damage. Our back
                  glass replacement service is designed to seamlessly replace
                  damaged back glass, giving your device a fresh and polished
                  look.
                </p>
              </div>
            </div>
            <div class="desc_row">
              <div class="desc_card">
                <h4 class="prob_title">
                  <i class="fa-solid fa-angle-down fa-xl"></i>Speaker Not
                  working
                </h4>
                <p class="prob_desc">
                  If your mobile phone speaker is muffled, distorted, or simply
                  producing no sound at all, you may be in need of a speaker
                  repair or replacement. Trust the experts at Ez Fix Mobile to
                  solve all of your mobile phone speaker issues.
                </p>
              </div>
              <div class="desc_card">
                <h4 class="prob_title">
                  <i class="fa-solid fa-angle-down fa-xl"></i>Charging Port
                  problems
                </h4>
                <p class="prob_desc">
                  A malfunctioning charging port can hinder your mobile's
                  ability to charge properly. Our technicians can diagnose and
                  repair or replace faulty charging port, ensuring a reliable
                  power connection.
                </p>
              </div>
            </div>
            <div class="desc_row">
              <div class="desc_card">
                <h4 class="prob_title">
                  <i class="fa-solid fa-angle-down fa-xl"></i>Battery
                  Replacement
                </h4>
                <p class="prob_desc">
                  Is your mobile phone battery draining quickly or not holding a
                  charge? It may be time for a replacement. At Ez Fix Mobile, we
                  offer professional battery replacement services to ensure your
                  device stays powered throughout the day.
                </p>
              </div>
              <div class="desc_card">
                <h4 class="prob_title">
                  <i class="fa-solid fa-angle-down fa-xl"></i>Camera Troubles
                </h4>
                <p class="prob_desc">
                  If your mobile's camera is not functioning correctly, it can
                  limit your ability to capture important moments. We offer
                  comprehensive camera repair services to address issues such as
                  blurry images, focus problems, or camera app malfunctions.
                </p>
              </div>
            </div>
            <div class="btn_repair">
              <button class="banner_btn">
                Schedule Your Repair Today
                <i class="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Problems;
