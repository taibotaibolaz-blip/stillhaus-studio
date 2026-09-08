import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./config.js";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// language toggle
const html = document.documentElement;
const langToggle = document.getElementById("lang-toggle");
langToggle.addEventListener("click", () => {
  html.setAttribute("data-lang", html.getAttribute("data-lang") === "pt" ? "en" : "pt");
});

// quote form -> Supabase
const form = document.getElementById("quote-form");
const submitBtn = document.getElementById("submit-btn");
const errorEl = document.getElementById("form-error");
const sentMsg = document.getElementById("sent-msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  errorEl.hidden = true;
  submitBtn.disabled = true;

  const data = new FormData(form);
  const payload = {
    name: data.get("name")?.toString().trim(),
    email: data.get("email")?.toString().trim(),
    area: data.get("area")?.toString().trim() || null,
    rooms: data.get("rooms")?.toString().trim() || null,
    package: data.get("package")?.toString() || null,
    message: data.get("message")?.toString().trim() || null,
  };

  const { error } = await supabase.from("quote_requests").insert(payload);

  if (error) {
    console.error(error);
    errorEl.textContent = html.getAttribute("data-lang") === "pt"
      ? "Não foi possível enviar. Tenta novamente ou escreve para ola@stillhaus.studio."
      : "Couldn't send this. Please try again or email ola@stillhaus.studio.";
    errorEl.hidden = false;
    submitBtn.disabled = false;
    return;
  }

  form.hidden = true;
  sentMsg.hidden = false;
});
