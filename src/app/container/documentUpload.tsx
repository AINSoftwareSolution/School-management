import { Upload } from "../component"

const DocumentUpload = () => {
    return (
        <form className="flex flex-wrap gap-4">
            <Upload label="Upload Adhar Card" />
            <Upload label="Upload Address Proof" />
            <Upload label="Upload Passport Size Photo" />
        </form>
    )
}

export default DocumentUpload