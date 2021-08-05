require "test_helper"

class TricksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @trick = tricks(:one)
  end

  test "should get index" do
    get tricks_url
    assert_response :success
  end

  test "should get new" do
    get new_trick_url
    assert_response :success
  end

  test "should create trick" do
    assert_difference('Trick.count') do
      post tricks_url, params: { trick: { difficulty: @trick.difficulty, name: @trick.name, type_of_trick: @trick.type_of_trick } }
    end

    assert_redirected_to trick_url(Trick.last)
  end

  test "should show trick" do
    get trick_url(@trick)
    assert_response :success
  end

  test "should get edit" do
    get edit_trick_url(@trick)
    assert_response :success
  end

  test "should update trick" do
    patch trick_url(@trick), params: { trick: { difficulty: @trick.difficulty, name: @trick.name, type_of_trick: @trick.type_of_trick } }
    assert_redirected_to trick_url(@trick)
  end

  test "should destroy trick" do
    assert_difference('Trick.count', -1) do
      delete trick_url(@trick)
    end

    assert_redirected_to tricks_url
  end
end
