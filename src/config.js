const config = {
    s3: {
        REGION: "ap-south-1",
        BUCKET: "notes-file-upload-s3-bucket",
      },
    apiGateway: {
        REGION: "ap-south-1",
        URL: "https://byguljh5l3.execute-api.ap-south-1.amazonaws.com/prod",
      },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_GuW56DHl9",
        APP_CLIENT_ID: "5n457lpibh3n1ppqubvavida5d",
        IDENTITY_POOL_ID: "us-east-1:ce648e8f-1802-4a78-9fa0-b2ac9f711d8e",
      },
      MAX_ATTACHMENT_SIZE: 5000000,
      STRIPE_KEY: "pk_test_51I3MowAu47fajQGZW65aZQwniHZuRkJ4kIFQM67Q2cYgpN47LRrAMK5uOPHTMGQqUVtpgn1jxAM3PN94wDXkpnRo00E4onFRRI",
}

export default config;