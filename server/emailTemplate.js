export function createEmailTemplate({
  name,
  email,
  phone,
  message,
}) {
  const firstLetter = name.charAt(0).toUpperCase();

  return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <title>New Portfolio Message</title>
</head>

<body style="
  margin:0;
  padding:0;
  background:#eef1f7;
  font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;
  color:#172033;
">

  <!-- Outer wrapper -->
  <table
    width="100%"
    cellpadding="0"
    cellspacing="0"
    border="0"
    style="background:#eef1f7;"
  >
    <tr>
      <td align="center" style="padding:40px 16px;">

        <!-- Main email -->
        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="
            max-width:650px;
            background:#ffffff;
            border-radius:22px;
            overflow:hidden;
            box-shadow:0 12px 45px rgba(23,32,51,0.12);
          "
        >

          <!-- ================================================= -->
          <!-- HEADER -->
          <!-- ================================================= -->

          <tr>
            <td
              style="
                padding:0;
                background:#111827;
              "
            >

              <!-- Gradient strip -->
              <div style="
                height:5px;
                background:linear-gradient(
                  90deg,
                  #220cb3 0%,
                  #6b21a8 50%,
                  #9333ea 100%
                );
              "></div>

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
              >
                <tr>
                  <td style="padding:34px 34px 32px;">

                    <!-- Brand -->
                    <table
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                    >
                      <tr>

                        <td
                          width="52"
                          height="52"
                          align="center"
                          valign="middle"
                          style="
                            width:52px;
                            height:52px;
                            background:linear-gradient(
                              135deg,
                              #6b21a8,
                              #220cb3
                            );
                            border-radius:15px;
                            color:#ffffff;
                            font-size:23px;
                            font-weight:800;
                            box-shadow:0 8px 20px rgba(107,33,168,0.35);
                          "
                        >
                          K
                        </td>

                        <td style="padding-left:14px;">

                          <div style="
                            color:#ffffff;
                            font-size:17px;
                            font-weight:700;
                            letter-spacing:-0.2px;
                          ">
                            Kartik Hedgotre
                          </div>

                          <div style="
                            color:#aeb7ca;
                            font-size:12px;
                            margin-top:4px;
                          ">
                            Portfolio
                          </div>

                        </td>

                      </tr>
                    </table>

                    <!-- Heading -->
                    <div style="
                      margin-top:32px;
                      color:#ffffff;
                      font-size:30px;
                      line-height:1.2;
                      font-weight:800;
                      letter-spacing:-0.8px;
                    ">
                      You have a new message
                    </div>

                    <div style="
                      margin-top:10px;
                      color:#aeb7ca;
                      font-size:14px;
                      line-height:1.6;
                    ">
                      Someone reached out through your portfolio website.
                    </div>

                    <!-- Badge -->
                    <div style="margin-top:20px;">

                      <span style="
                        display:inline-block;
                        padding:7px 12px;
                        background:rgba(139,92,246,0.15);
                        border:1px solid rgba(167,139,250,0.25);
                        border-radius:999px;
                        color:#c4b5fd;
                        font-size:12px;
                        font-weight:700;
                      ">
                        ● &nbsp; NEW CONTACT
                      </span>

                    </div>

                  </td>
                </tr>
              </table>

            </td>
          </tr>


          <!-- ================================================= -->
          <!-- CONTENT -->
          <!-- ================================================= -->

          <tr>
            <td style="padding:34px;">

              <!-- Intro -->

              <div style="
                font-size:15px;
                line-height:1.7;
                color:#5b6475;
                margin-bottom:26px;
              ">
                A visitor has submitted the contact form on your
                portfolio. Here are their details:
              </div>


              <!-- ================================================= -->
              <!-- SENDER CARD -->
              <!-- ================================================= -->

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  border:1px solid #e6e9f0;
                  border-radius:16px;
                  background:#fafbfe;
                "
              >
                <tr>

                  <!-- Avatar -->
                  <td
                    width="74"
                    valign="top"
                    style="padding:20px 0 20px 20px;"
                  >

                    <div style="
                      width:52px;
                      height:52px;
                      line-height:52px;
                      text-align:center;
                      border-radius:50%;
                      background:linear-gradient(
                        135deg,
                        #220cb3,
                        #9333ea
                      );
                      color:#ffffff;
                      font-size:20px;
                      font-weight:800;
                    ">
                      ${name.charAt(0).toUpperCase()}
                    </div>

                  </td>

                  <!-- Name -->
                  <td valign="middle" style="padding:20px 20px 20px 12px;">

                    <div style="
                      color:#8a93a5;
                      font-size:11px;
                      font-weight:700;
                      text-transform:uppercase;
                      letter-spacing:0.8px;
                    ">
                      Sender
                    </div>

                    <div style="
                      margin-top:4px;
                      color:#111827;
                      font-size:18px;
                      font-weight:750;
                    ">
                      ${name}
                    </div>

                    <div style="
                      margin-top:4px;
                      color:#6b7280;
                      font-size:13px;
                    ">
                      Contact form submission
                    </div>

                  </td>

                </tr>
              </table>


              <!-- ================================================= -->
              <!-- CONTACT DETAILS -->
              <!-- ================================================= -->

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="margin-top:14px;"
              >
                <tr>

                  <!-- Email -->
                  <td
                    width="50%"
                    valign="top"
                    style="padding-right:7px;"
                  >

                    <table
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                      style="
                        border:1px solid #e6e9f0;
                        border-radius:14px;
                        background:#ffffff;
                      "
                    >
                      <tr>
                        <td style="padding:18px;">

                          <div style="
                            font-size:11px;
                            font-weight:700;
                            color:#8a93a5;
                            text-transform:uppercase;
                            letter-spacing:0.7px;
                          ">
                            Email
                          </div>

                          <div style="
                            margin-top:8px;
                            font-size:13px;
                            line-height:1.5;
                          ">
                            <a
                              href="mailto:${email}"
                              style="
                                color:#4f46e5;
                                text-decoration:none;
                                font-weight:600;
                                word-break:break-word;
                              "
                            >
                              ${email}
                            </a>
                          </div>

                        </td>
                      </tr>
                    </table>

                  </td>


                  <!-- Phone -->
                  <td
                    width="50%"
                    valign="top"
                    style="padding-left:7px;"
                  >

                    <table
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                      style="
                        border:1px solid #e6e9f0;
                        border-radius:14px;
                        background:#ffffff;
                      "
                    >
                      <tr>
                        <td style="padding:18px;">

                          <div style="
                            font-size:11px;
                            font-weight:700;
                            color:#8a93a5;
                            text-transform:uppercase;
                            letter-spacing:0.7px;
                          ">
                            Phone
                          </div>

                          <div style="
                            margin-top:8px;
                            font-size:13px;
                            line-height:1.5;
                          ">

                            ${
                              phone
                                ? `
                                  <a
                                    href="tel:${phone}"
                                    style="
                                      color:#4f46e5;
                                      text-decoration:none;
                                      font-weight:600;
                                    "
                                  >
                                    ${phone}
                                  </a>
                                `
                                : `
                                  <span style="color:#9ca3af;">
                                    Not provided
                                  </span>
                                `
                            }

                          </div>

                        </td>
                      </tr>
                    </table>

                  </td>

                </tr>
              </table>


              <!-- ================================================= -->
              <!-- MESSAGE -->
              <!-- ================================================= -->

              <div style="
                margin-top:30px;
                margin-bottom:12px;
              ">

                <span style="
                  font-size:12px;
                  font-weight:800;
                  color:#8a93a5;
                  text-transform:uppercase;
                  letter-spacing:0.9px;
                ">
                  Message
                </span>

              </div>


              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  border-radius:16px;
                  background:#f7f5ff;
                  border:1px solid #e8e1ff;
                "
              >
                <tr>

                  <td
                    width="5"
                    style="
                      width:5px;
                      background:#6b21a8;
                      border-radius:16px 0 0 16px;
                    "
                  ></td>

                  <td style="
                    padding:22px 22px 22px 20px;
                  ">

                    <div style="
                      font-size:15px;
                      line-height:1.8;
                      color:#374151;
                      white-space:normal;
                    ">
                      ${message.replace(/\n/g, "<br>")}
                    </div>

                  </td>

                </tr>
              </table>


              <!-- ================================================= -->
              <!-- CTA -->
              <!-- ================================================= -->

              <div style="
                margin-top:30px;
                padding:22px;
                border-radius:16px;
                background:#f8fafc;
                border:1px solid #e8ebf1;
                text-align:center;
              ">

                <div style="
                  color:#374151;
                  font-size:14px;
                  margin-bottom:15px;
                  font-weight:600;
                ">
                  Want to respond to ${name}?
                </div>

                <a
                  href="mailto:${email}?subject=${encodeURIComponent(
  `Re: Portfolio message from ${name}`
)}"
                  style="
                    display:inline-block;
                    padding:13px 24px;
                    background:linear-gradient(
                      135deg,
                      #220cb3,
                      #6b21a8
                    );
                    color:#ffffff;
                    text-decoration:none;
                    border-radius:10px;
                    font-size:14px;
                    font-weight:700;
                    box-shadow:0 6px 16px rgba(34,12,179,0.25);
                  "
                >
                  Reply to ${name} &nbsp; →
                </a>

              </div>

            </td>
          </tr>


          <!-- ================================================= -->
          <!-- FOOTER -->
          <!-- ================================================= -->

          <tr>
            <td
              style="
                padding:25px 34px;
                background:#f8f9fc;
                border-top:1px solid #e8ebf1;
                text-align:center;
              "
            >

              <div style="
                color:#687386;
                font-size:12px;
                font-weight:600;
              ">
                Kartik Hedgotre · Portfolio
              </div>

              <div style="
                margin-top:7px;
                color:#a0a8b7;
                font-size:11px;
                line-height:1.5;
              ">
                This notification was automatically generated
                from your portfolio contact form.
              </div>

              <div style="
                margin-top:12px;
                color:#c0c5cf;
                font-size:10px;
              ">
                © ${new Date().getFullYear()} Kartik Hedgotre
              </div>

            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;}