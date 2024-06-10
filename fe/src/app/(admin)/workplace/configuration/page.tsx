import BoxFormComponent from "@/components/workplace/BoxForm";
import BoxInputComponent from "@/components/workplace/BoxInput";
import BoxInputFileComponent from "@/components/workplace/BoxInputFile";

export default function ConfigPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Configuration</h1>
      <div className="w-full sm:px-4 py-8 text-white space-y-8">
        {/* Setting */}
        <BoxFormComponent title="Setting" submit={true}>
          {/* Website name */}
          <BoxInputComponent
            input="Website name"
            name="website-name"
            type="text"
            auto="off"
          />

          {/* Title */}
          <BoxInputComponent
            input="Title"
            name="title"
            type="text"
            auto="off"
          />

          {/* Keywords */}
          <BoxInputComponent
            input="Keywords"
            name="keywords"
            type="text"
            auto="off"
          />

          {/* Logo */}
          <BoxInputFileComponent
            input="Logo"
            name="logo"
            auto="off"
            size="512x512"
            table={false}
          />

          {/* Reseller Gold Price */}
          <BoxInputComponent
            input="Reseller Gold Price"
            name="reseller-gold-price"
            type="number"
            auto="off"
          />

          {/* Max. account registration */}
          <BoxInputComponent
            input="Max. account registration"
            name="max-account-registration"
            type="number"
            auto="off"
          />
        </BoxFormComponent>

        {/* Fonnte */}
        <BoxFormComponent title="Fonnte" submit={true}>
          <BoxInputComponent
            input="Token"
            name="fonnte-token"
            type="text"
            auto="off"
          />
        </BoxFormComponent>

        {/* Banner */}
        <BoxFormComponent title="Banner" submit={true}>
          <BoxInputFileComponent
            input="Add banner"
            name="banner"
            size="1920x1080"
            auto="off"
            table={true}
          />
        </BoxFormComponent>

        {/* Check mutation */}
        <BoxFormComponent title="Check mutation" submit={true}>
          <BoxInputComponent
            input="Api key"
            name="api-key-mutation"
            type="text"
            auto="off"
          />

          <BoxInputComponent
            input="Api signature"
            name="api-signature-mutation"
            type="text"
            auto="off"
          />
        </BoxFormComponent>

        {/* Moota */}
        <BoxFormComponent title="Moota" submit={true}>
          <BoxInputComponent
            input="Token secret"
            name="token-moota"
            type="text"
            auto="off"
          />
        </BoxFormComponent>

        {/* Digiflazz */}
        <BoxFormComponent title="Digiflazz" submit={true}>
          <BoxInputComponent
            input="Username"
            name="username-digiflazz"
            type="text"
            auto="off"
          />

          <BoxInputComponent
            input="Api key"
            name="api-key-digiflazz"
            type="text"
            auto="off"
          />
        </BoxFormComponent>

        {/* Api games */}
        <BoxFormComponent title="Api games" submit={true}>
          <BoxInputComponent
            input="Merchant ID"
            name="merchant-id"
            type="text"
            auto="off"
          />

          <BoxInputComponent
            input="Secret key"
            name="secret-key-merchant"
            type="text"
            auto="off"
          />
        </BoxFormComponent>

        {/* Tripay */}
        <BoxFormComponent title="Tripay" submit={true}>
          <BoxInputComponent
            input="Api key"
            name="tripay-api-key"
            type="text"
            auto="off"
          />

          <BoxInputComponent
            input="Private key"
            name="tripay-private-key"
            type="text"
            auto="off"
          />

          <BoxInputComponent
            input="Merchant code"
            name="tripay-merchant-code"
            type="text"
            auto="off"
          />
        </BoxFormComponent>

        {/* Media social */}
        <BoxFormComponent title="Media social" submit={true}>
          <BoxInputComponent
            input="Whatsapp"
            name="media-whatsapp"
            type="text"
            auto="off"
          />

          <BoxInputComponent
            input="Whatsapp grub"
            name="media-wa-grub"
            type="text"
            auto="off"
          />

          <BoxInputComponent
            input="Instagram"
            name="media-instagram"
            type="text"
            auto="off"
          />

          <BoxInputComponent
            input="Facebook"
            name="media-facebook"
            type="text"
            auto="off"
          />

          <BoxInputComponent
            input="Telegram"
            name="media-telegram"
            type="text"
            auto="off"
          />
        </BoxFormComponent>

        {/* Faq */}
        <BoxFormComponent title="Faq" submit={true}>
          <textarea
            name=""
            id=""
            className="bg-white text-[#162331] p-8 mx-8 rounded-md"></textarea>
        </BoxFormComponent>

        {/* About us */}
        <BoxFormComponent title="About us" submit={true}>
          <textarea
            name=""
            id=""
            className="bg-white text text-[#162331] p-8 mx-8 rounded-md"></textarea>
        </BoxFormComponent>
      </div>
    </>
  );
}
