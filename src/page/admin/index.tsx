import { useState } from "react";
import { Button, Card, CardBody, CardFooter, CardTitle, Container, Form } from "react-bootstrap";

export const AdminController: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];


        if (!file || !file.type.match(/^image\/(png|jpeg)$/i)) {
            setSelectedFile(null);
            return;
        }

        setSelectedFile(file);
    };

    const handleData = async () => {
        if (!selectedFile) {
            alert("please select the file")
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);

        reader.onloadend = () => {
            if (reader.result) {
                const encode = reader.result.toString();
                window.localStorage.setItem('image', encode);
            }


            else {
                console.error("i thought there is a any mistake in your file.");
            }
        };
    };

    return (
        <Container>
            <Card className="mt-5">
                <CardBody>
                    <CardTitle title="Hero Banner" />
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label className="text-uppercase mb-4">
                            <h4>Hero Banners</h4>
                        </Form.Label>
                        <Form.Control type="file" accept="image/png, image/jpeg" onChange={onChangeHandler} />

                    </Form.Group>
                    <CardFooter>
                        <Button variant="primary" onClick={handleData} >Submit</Button>
                    </CardFooter>
                </CardBody>
            </Card>

            <div className="mt-5">



            </div>
        </Container>
    );
};
