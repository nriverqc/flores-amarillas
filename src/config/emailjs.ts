import emailjs from '@emailjs/browser';

export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_7eyg31r",
  TEMPLATE_ID: "template_ea1nrej",
  PUBLIC_KEY: "rbrwK5LuwHhciDrdA"
};

// Pre-inicializar EmailJS en el cliente
if (typeof window !== 'undefined') {
  try {
    emailjs.init({
      publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
    });
  } catch (err) {
    console.warn("No se pudo pre-inicializar EmailJS:", err);
  }

  // Script de Prueba Manual desde la Consola del Navegador (F12 -> Console -> window.testEmail())
  (window as unknown as { testEmail: () => Promise<void> }).testEmail = async () => {
    console.log("🧪 Iniciando test manual de EmailJS desde consola...");
    console.log("📋 Credenciales en uso:", {
      SERVICE_ID: EMAILJS_CONFIG.SERVICE_ID,
      TEMPLATE_ID: EMAILJS_CONFIG.TEMPLATE_ID,
      PUBLIC_KEY: EMAILJS_CONFIG.PUBLIC_KEY,
    });

    try {
      const res = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          name: "Lorena (Prueba Consola)",
          response_type: "Test desde consola F12",
          message: "Probando envio de correo"
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      console.log("✅ TEST EXITOSO:", res.status, res.text);
      alert("¡Correo de prueba enviado con éxito! Status " + res.status);
    } catch (err: unknown) {
      console.error("❌ TEST FALLIDO:", err);
      const errorDetail = (err as { text?: string; message?: string })?.text || (err as { message?: string })?.message || JSON.stringify(err);
      console.error("Detalle de respuesta del servidor:", errorDetail);
      alert("Error al enviar el correo (" + errorDetail + "). Revisa la consola F12.");
    }
  };
}
