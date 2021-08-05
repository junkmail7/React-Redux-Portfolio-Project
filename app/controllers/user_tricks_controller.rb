class UserTricksController < ApplicationController
  before_action :set_user_trick, only: %i[ show edit update destroy ]
  skip_before_action :verify_authenticity_token

  # GET /user_tricks or /user_tricks.json
  def index
    @user_tricks = UserTrick.all

    render json: UserTrickSerializer.new(@user_tricks).serialized_json
  end

  # GET /user_tricks/1 or /user_tricks/1.json
  def show
    @user_trick = UserTrick.find_by(params[:id])

    render json: UserTrickSerializer.new(@user_trick).serialized_json
  end

  # GET /user_tricks/new
  def new
    @user_trick = UserTrick.new
  end

  # GET /user_tricks/1/edit
  def edit
  end

  # POST /user_tricks or /user_tricks.json
  def create
    @user_trick = UserTrick.find_or_create_by(user_trick_params)

    respond_to do |format|
      if @user_trick.save
        format.html { redirect_to @user_trick, notice: "User trick was successfully created." }
        format.json { render :show, status: :created, location: @user_trick }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @user_trick.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /user_tricks/1 or /user_tricks/1.json
  def update
     # @user_trick = UserTrick.find(params[:id])
      @user_trick.update(user_trick_params)
      render json: UserTrickSerializer.new(@user_trick).serialized_json
  end

  # DELETE /user_tricks/1 or /user_tricks/1.json
  def destroy
    @user_trick.destroy
    respond_to do |format|
      format.html { redirect_to user_tricks_url, notice: "User trick was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_trick
      @user_trick = UserTrick.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_trick_params
      params.require(:user_trick).permit(:user_id, :trick_id, :proficiency)
    end
end
