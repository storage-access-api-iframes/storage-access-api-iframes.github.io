const logging = (subject, message) => {
  console.info(subject, message);
  window.parent.postMessage(subject + ' :: ' + message, "https://storage-access-api.github.io");
};

const check = () => {
  document.hasStorageAccess().then(
    (result) => {
      logging("hasStorageAccess", result);
    },
    (error) => {
      logging("error on hasStorageAccess", error);
    }
  );
};

const request = () => {
  document.requestStorageAccess().then(
    function () {
      logging("requestStorageAccess", "granted");
    },
    function () {
      logging("requestStorageAccess", "rejected");
    }
  );
};
