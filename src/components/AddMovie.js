import React from "react";
// import Modal from "react-modal";
import { Modal, Button } from "antd";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      visible: false,
      title: "",
      rating: 1,
      image: "",
      date: ""
    };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Add New Movie
        </Button>
        <Modal
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={() =>
                this.props.add({
                  id: Math.random(),
                  ...this.state,
                  ...this.setState({ visible: false })
                })
              }
            >
              Submit
            </Button>
          ]}
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Add Movie</h2>
          <form className="form">
            <label>Movie Name</label>

            <input type="text" name="title" onChange={this.handleChange} />

            <label>Year</label>

            <input type="text" name="date" onChange={this.handleChange} />

            <label>Image</label>

            <input type="text" name="image" onChange={this.handleChange} />

            <label>Rating</label>

            <input type="text" name="rating" onChange={this.handleChange} />
          </form>
        </Modal>
      </div>
    );
  }
}

export default AddMovie;
