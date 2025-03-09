import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Configuration du transporteur
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Ton email
        pass: process.env.EMAIL_PASS, // Ton mot de passe ou App Password
      },
    });

    // Options de l'email
    let mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Email de réception
      subject: `Nouveau message de ${name}`,
      text: message,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return Response.json({
      success: true,
      message: "Email envoyé avec succès !",
    });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
